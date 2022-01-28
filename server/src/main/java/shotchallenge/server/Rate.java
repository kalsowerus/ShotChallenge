package shotchallenge.server;

import java.math.BigDecimal;

public class Rate {
    private final int id;
    private final String name;
    private final String rate;

    public Rate(int id, String name, String rate) {
        this.id = id;
        this.name = name;
        this.rate = rate;
    }

    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getRate() {
        return rate;
    }
}
