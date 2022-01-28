package shotchallenge.server;

public class Shot {
    private final int id;
    private final String name;

    public Shot(int id, String name) {
        this.id = id;
        this.name = name;
    }

    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }
}
