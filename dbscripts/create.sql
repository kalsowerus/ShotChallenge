CREATE TABLE IF NOT EXISTS Team (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS ShotsByTeam (
    id INT AUTO_INCREMENT PRIMARY KEY,
    team INT NOT NULL,
    amount INT NOT NULL,
    CONSTRAINT fk_team FOREIGN KEY (team) REFERENCES Team (id)
);

CREATE OR REPLACE VIEW TeamsOverview AS
select
    t.id,
    t.name,
    coalesce(sum(sbt.amount), 0) as score
from Team t
left join ShotsByTeam sbt
on t.id = sbt.team
group by t.id, t.name;
