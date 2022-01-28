package shotchallenge.server;

import java.math.BigDecimal;

public class TeamOverview {
    private final int id;
    private final String name;
    private final BigDecimal score;

    public TeamOverview(int id, String name, BigDecimal score) {
        this.id = id;
        this.name = name;
        this.score = score;
    }

    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public BigDecimal getScore() {
        return score;
    }
}
