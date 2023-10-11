const test = async () => {
    console.log('A');
    const splineEUID = "3bb55065-4c5a-4507-8ba6-1d80a9df1f0c";
    console.log('B');
    const voitureEUID = "1f9c1d9a-338d-4eaf-8adb-02d21653befb";
    console.log('C');
    const spline = await SDK3DVerse.engineAPI.findEntitiesByEUID(splineEUID.toString());
    console.log('D');
    const voiture = await SDK3DVerse.engineAPI.findEntitiesByEUID(voitureEUID.toString());
    console.log('E');
    console.log('Spline: ', spline);
    console.log('Voiture: ', voiture);
    console.log('debug children: ', SDK3DVerse.engineAPI.getEntityChildren(spline));

    const trajEntities = spline[0];
    let allpoints = SDK3DVerse.engineAPI.getEntityChildren(trajEntities);

    let allpositions = new Array();
    allpoints.forEach(point => {
        allpositions.push(point.getGlobalTransform());
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
}
test();