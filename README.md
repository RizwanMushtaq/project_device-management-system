## device-management-system

### TechStack:
<ul>
    <li>Frontend</li>
        <ul>
            <li>React</li>
            <li>Vite</li>
            <li>RTK Query</li>
            <li>React Router</li>
        </ul>
    <li>Backend</li>
        <ul>
            <li>Nest.js</li>
            <li>TypeORM</li>
        </ul>
    <li>Database</li>
        <ul>
            <li>Postgres</li>
        </ul>
    <li>Development</li>
        <ul>
            <li>Docker</li>
        </ul>
</ul>

### Run the development setup using Docker Compose:
<code>docker-compose -f docker-compose.dev.yml up -d</code>

### To view the logs for the running containers, you can use the following command:
<code>docker-compose -f docker-compose.dev.yml logs -f</code>

### To stop and remove the containers, run the following command:
<code>docker-compose -f docker-compose.dev.yml down</code>

### Check the logs of the PostgresSQL container:
<code>docker-compose -f docker-compose.dev.yml logs db</code>
