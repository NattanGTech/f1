function Game() {
 
    this.GameLoop = function() {
   
        if(!this.paused) {
            this.Update(); 
        }
        let voiture = SDK3DVerse.engineAPI.getEntity("1f9c1d9a-338d-4eaf-8adb-02d21653befb");
            let spline = SDK3DVerse.engineAPI.getEntity("3bb55065-4c5a-4507-8ba6-1d80a9df1f0c");
            //let splineName = spline.getName();
            let allpoints = spline.getChildren();
            let allpositions = new Array();
            allpoints.forEach(point => {
                allpositions.push(point.engineAPI.getGlobalTransform().position);
            });
        window.requestAnimFrame(function() {
            voiture.setPosition(allpositions[i]);
            i++;
            game.GameLoop();
        });
    }
}