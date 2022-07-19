function distanceFromHqInBlocks(street){
    return Math.abs(street - 42);
}

function distanceFromHqInFeet(street){
    return distanceFromHqInBlocks(street)*264;
}

function distanceTravelledInFeet(startingBlock, endingBlock){
    return Math.abs(startingBlock-endingBlock)*264;
}

function calculatesFarePrice(start, destination){

    if(distanceTravelledInFeet(start, destination) <= 400){
        return 0;
    }
    else if(distanceTravelledInFeet(start, destination) <= 2000){
        let priceMinusStarting = (distanceTravelledInFeet(start, destination)-400);
        return priceMinusStarting*.02;

    }
    else if(distanceTravelledInFeet(start, destination)  <=2500){
        return 25;
    }
    else if(distanceTravelledInFeet(start, destination) > 2500){
        return 'cannot travel that far';
    }

}