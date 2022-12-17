# Mission-Control

Project to fetch SpaceX data through SpaceX API and use the data to store and launch mission and view their status.

## How to Run (On M1 Mac)

1. Navigate inside project folder.
2. docker buildx create --name m1_builder
3. docker buildx use m1_builder
4. docker buildx inspect --bootstrap
5. docker buildx build --platform linux/amd64 --tag <your docker username>/mission-control --push ./
6. docker run -it -p 8000:8000 <your docker username>/mission-control

## How to Run (Except M1 Mac)

1. Navigate inside project folder.
2. docker build --tag <your docker username>/mission-control --push ./
3. docker run -it -p 8000:8000 <your docker username>/mission-control
