FROM java:8-alpine
MAINTAINER Your Name <you@example.com>

ADD target/uberjar/cardy.jar /cardy/app.jar

EXPOSE 3000

CMD ["java", "-jar", "/cardy/app.jar"]
