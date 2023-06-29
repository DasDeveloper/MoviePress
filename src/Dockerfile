# Use an official OpenJDK runtime as the base image
#FROM adoptopenjdk:17-jdk-hotspot
FROM adoptopenjdk/openjdk17:alpine-jre

# Set the working directory inside the container
WORKDIR /app

# Copy the Maven project file to the container
COPY pom.xml .

# Copy the entire src folder to the container
COPY src ./src

# Build the application with Maven
RUN mvn clean package -DskipTests

# Expose the port that your Spring Boot application listens on
EXPOSE 8080

# Set any necessary environment variables
ENV SPRING_PROFILES_ACTIVE=production

# Run the JAR file when the container launches
CMD ["java", "-jar", "target/moviepress-0.0.1-SNAPSHOT.jar"]

