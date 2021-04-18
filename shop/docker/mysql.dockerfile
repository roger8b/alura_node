FROM mysql:5.7
LABEL "manteiner"="Roger Silva" 
COPY ./db/ /docker-entrypoint-initdb.d/