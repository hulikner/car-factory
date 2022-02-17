const createChassis = () => {
    const newChassisObject = {}
    return newChassisObject
}

let chassisObject = createChassis()

const addBody = (chassisObject) => {
    chassisObject.body = 'Fever'
    return chassisObject
}

const addWheels = (chassisObject) => {
    chassisObject.wheels = 4
    return chassisObject
}

const addEngine = (chassisObject) => {
    chassisObject.engine = '4.8L'
    return chassisObject
}

const addSteeringWheel = (chassisObject) => {
    chassisObject.steeringWheel='Tilting'
    return chassisObject
}

const addDriveTrain = (chassisObject) => {
    chassisObject.drivetrain='Two wheel drive'
    return chassisObject
}

const chassis = createChassis()
const chassisBody = addBody(chassisBody)
const chassisWheels = addWheels(chassisBody)
const chassisEngine = addEngine(chassisWheels)
const chassisSteering = addSteeringWheel(chassisEngine)
const chassisDriveTrain = addDriveTrain(chassisSteering)

console.log(chassis)
console.log(chassisBody)
console.log(chassisWheels)
console.log(chassisEngine)
console.log(chassisSteering)
console.log(chassisDriveTrain)