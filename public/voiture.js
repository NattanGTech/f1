let voiture = SDK3DVerse.engineAPI.findEntitiesByEUID("1f9c1d9a-338d-4eaf-8adb-02d21653befb");
let spline = SDK3DVerse.engineAPI.findEntitiesByEUID("3bb55065-4c5a-4507-8ba6-1d80a9df1f0c");
//let splineName = spline.getName();
let allpoints = SDK3DVerse.engineAPI.getEntityChildren(spline);
console.log('Spline: ', SDK3DVerse.engineAPI.findEntitiesByEUID("3bb55065-4c5a-4507-8ba6-1d80a9df1f0c"));
console.log('debug children: ', SDK3DVerse.engineAPI.getEntityChildren(spline));
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