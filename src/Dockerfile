
FROM maven:4.0.0
COPY . .
RUN mvn clean package -DskipTests


FROM openjdk:17
COPY --from=build /target/moviepress-0.0.1-SNAPSHOT.jar moviepress-0.0.1-SNAPSHOT.jar

EXPOSE 8080
ENTRYPOINT ["java", "-jar", "moviepress-0.0.1-SNAPSHOT.jar"]

