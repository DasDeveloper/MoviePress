FROM maven:3.6.3 AS maven

WORKDIR /usr/synapsis
RUN mvn clean package -Pprod -DskipTests

FROM adoptopenjdk/openjdk11:alpine-jre
ARG JAR_FILE=synapsis-0.0.1-SNAPSHOT.jar
WORKDIR /opt

COPY --from=maven /usr/synapsis/target/${JAR_FILE} /opt/
EXPOSE 8080

ENTRYPOINT ["java","-jar","synapsis-0.0.1-SNAPSHOT.jar"]