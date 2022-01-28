package shotchallenge.server;

import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.sql.*;
import java.text.DecimalFormat;
import java.util.ArrayList;
import java.util.List;

@RestController
public class AppController {

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/")
    public String getIndex() {
        return "test";
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/teams")
    public List<TeamOverview> getTeams() {
        try(Connection connection = getConnection();
            Statement statement = connection.createStatement();
            ResultSet resultSet = statement.executeQuery("select * from TeamsOverview")) {

            List<TeamOverview> teamOverviews = new ArrayList<>();
            while (resultSet.next()) {
                int id = resultSet.getInt("id");
                String name = resultSet.getString("name");
                BigDecimal score = resultSet.getBigDecimal("score");
                TeamOverview teamOverview = new TeamOverview(id, name, score);
                teamOverviews.add(teamOverview);
            }

            return teamOverviews;
        } catch (SQLException e) {
            e.printStackTrace();
            return null;
        }
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/rates")
    public List<Rate> getRates() {
        try(Connection connection = getConnection();
            Statement statement = connection.createStatement();
            ResultSet resultSet = statement.executeQuery("select * from Rates")) {

            List<Rate> rates = new ArrayList<>();
            while (resultSet.next()) {
                int id = resultSet.getInt("id");
                String name = resultSet.getString("name");
                BigDecimal rate = resultSet.getBigDecimal("rate");
                DecimalFormat decimalFormat = new DecimalFormat("###.#");
                Rate rateObject = new Rate(id, name, decimalFormat.format(rate));
                rates.add(rateObject);
            }

            return rates;
        } catch (SQLException e) {
            e.printStackTrace();
            return null;
        }
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/shots")
    public List<Shot> getShots() {
        try(Connection connection = getConnection();
            Statement statement = connection.createStatement();
            ResultSet resultSet = statement.executeQuery("select * from Shot")) {

            List<Shot> shots = new ArrayList<>();
            while (resultSet.next()) {
                int id = resultSet.getInt("id");
                String name = resultSet.getString("name");
                Shot shot = new Shot(id, name);
                shots.add(shot);
            }

            return shots;
        } catch (SQLException e) {
            e.printStackTrace();
            return null;
        }
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/shots")
    public boolean postShots(@RequestBody ShotForTeam shotForTeam) {
        try(Connection connection = getConnection();
            Statement statement = connection.createStatement();
            ResultSet resultSet = statement.executeQuery("select * from Rates where id = " + shotForTeam.getShot())) {

            if (!resultSet.next()) {
                return false;
            }

            BigDecimal rate = resultSet.getBigDecimal("rate");

            statement.executeUpdate(String.format(
                    "INSERT INTO ShotsByTeam (team, shot, amount, rate) VALUES (%s, %s, %s, %s)",
                    shotForTeam.getTeam(),
                    shotForTeam.getShot(),
                    shotForTeam.getAmount(),
                    rate));
            return true;
        } catch (SQLException e) {
            e.printStackTrace();
            return false;
        }
    }

    private Connection getConnection() throws SQLException {
        return DriverManager.getConnection("jdbc:mysql://localhost:3306/ShotChallenge", "shotchallenge", "shotchallenge");
    }
}
