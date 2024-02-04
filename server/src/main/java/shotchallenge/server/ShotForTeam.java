package shotchallenge.server;

public class ShotForTeam {
    private final int team;
    private final int amount;

    public ShotForTeam(int team, int amount) {
        this.team = team;
        this.amount = amount;
    }

    public int getTeam() {
        return team;
    }

    public int getAmount() {
        return amount;
    }
}
