let voiture = SDK3DVerse.engineAPI.findEntitiesByEUID("1f9c1d9a-338d-4eaf-8adb-02d21653befb");
let spline = SDK3DVerse.engineAPI.findEntitiesByEUID("3bb55065-4c5a-4507-8ba6-1d80a9df1f0c");
//let splineName = spline.getName();
console.log('test ', spline.getChildren());
let allpoints = spline.getEntityChildren();
let allpositions = new Array();
allpoints.forEach(point => {
    allpositions.push(point.engineAPI.getGlobalTransform().position);
});
function GameLoop() { 
    window.requestAnimationFrame(function() {
        voiture.setPosition(allpositions[i]);
        i++;
        SDK3DVerse.engineAPI.propagateChanges();
        GameLoop();
    });
}
GameLoop();