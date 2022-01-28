CREATE TABLE IF NOT EXISTS Team (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS Shot (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS ShotsByTeam (
    id INT AUTO_INCREMENT PRIMARY KEY,
    team INT NOT NULL,
    shot INT NOT NULL,
    amount INT NOT NULL,
    rate DECIMAL(5,4),
    CONSTRAINT fk_team FOREIGN KEY (team) REFERENCES Team (id),
    CONSTRAINT fk_shot FOREIGN KEY (shot) REFERENCES Shot (id)
);

CREATE OR REPLACE VIEW TeamsOverview AS
select
    t.id,
    t.name,
    coalesce(sum(sbt.amount * sbt.rate), 0) as score
from Team t
left join ShotsByTeam sbt
on t.id = sbt.team
group by t.id, t.name;

CREATE OR REPLACE VIEW Rates AS
select
    s.id,
    s.name,
    round(1/(1+exp((coalesce(sum(sbt.amount), 0) - ((select coalesce(sum(sbt2.amount), 0) from ShotsByTeam sbt2) / (select count(*) from Shot))) / 10))*10)/5 as rate
from Shot s
left join ShotsByTeam sbt
on s.id = sbt.shot
group by s.id, s.name;

