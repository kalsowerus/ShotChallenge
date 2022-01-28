package shotchallenge.server;

public class ShotForTeam {
    private final int team;
    private final int shot;
    private final int amount;

    public ShotForTeam(int team, int shot, int amount) {
        this.team = team;
        this.shot = shot;
        this.amount = amount;
    }

    public int getTeam() {
        return team;
    }

    public int getShot() {
        return shot;
    }

    public int getAmount() {
        return amount;
    }
}
