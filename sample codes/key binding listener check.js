// Initialize Game World
S9.GameWorld.init("gameContainer");

// Create Cloud 1
var cloud1_params: S9.I_EnvironmentParams = {
    name: "cloud_1",
    imgUrl: "img/cloud1.png",
    height: 50,
    width: 509,
    x: 0,
    y: 0,
    autoMove: S9.E_EnvironmentAutoMove.Right,
    animationDuration: "20s",
    htmlContainerID: S9.GameWorld.id
}

var cloud1 = new S9.GameEnvironment(cloud1_params);


// Create Cloud 2
var cloud2_params: S9.I_EnvironmentParams = {
    name: "cloud_2",
    imgUrl: "img/cloud2.png",
    height: 100,
    width: 1183,
    x: 0,
    y: 0,
    autoMove: S9.E_EnvironmentAutoMove.Right,
    animationDuration: "80s",
    htmlContainerID: S9.GameWorld.id
}

var cloud2 = new S9.GameEnvironment(cloud2_params);


// Create The Road
var road_params: S9.I_EnvironmentParams = {
    name: "road",
    imgUrl: "img/road.png",
    height: 50,
    width: 238,
    x: 0,
    y: (S9.GameWorld.height - 50),
    autoMove: S9.E_EnvironmentAutoMove.Right,
    animationDuration: "5s",
    htmlContainerID: S9.GameWorld.id
}

var road = new S9.GameEnvironment(road_params);



// Let's create GameCharacter Goltu
var goltu_params: S9.I_EnvironmentParams = {
    name: "goltu",
    imgUrl: "img/goltu_run.png",
    height: 83,
    width: 60,
    x: 100,
    y: (road_params.y - 83 + road_params.height/2 + 9),
    autoMove: S9.E_EnvironmentAutoMove.None,
    animationDuration: ".2s",
    htmlContainerID: S9.GameWorld.id
}

var goltu = new S9.GameEnvironment(goltu_params);


S9.Events.addKeyListener(S9.E_Key.SPACE, {
    callbackId: ("cloud1_jump_" + Math.random().toString().replace(/[.]/g, "")),
    fn: cloud1.jump,
    objectInstance: cloud1
})

S9.Events.addKeyListener(S9.E_Key.SPACE, {
    callbackId: ("cloud2_jump_" + Math.random().toString().replace(/[.]/g, "")),
    fn: cloud2.jump,
    objectInstance: cloud2
})

S9.Events.addKeyListener(S9.E_Key.A, {
    callbackId: ("goltu_jump_" + Math.random().toString().replace(/[.]/g, "")),
    fn: goltu.jump,
    objectInstance: goltu
})

S9.Events.addKeyListener(S9.E_Key.A, {
    callbackId: ("road_jump_" + Math.random().toString().replace(/[.]/g, "")),
    fn: road.jump,
    objectInstance: road
})

