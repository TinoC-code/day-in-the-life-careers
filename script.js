// Career Simulator Code

class CareerSimulator {
    constructor() {
        this.careers = [];
        this.currentCareer = null;
    }

    addCareer(career) {
        this.careers.push(career);
    }

    selectCareer(careerName) {
        this.currentCareer = this.careers.find(c career => career.name === careerName);
        if (!this.currentCareer) {
            console.error('Career not found!');
        }
    }

    simulate() {
        if (this.currentCareer) {
            console.log(`Simulating career: ${this.currentCareer.name}`);
            // Simulation logic here
            console.log(`Job satisfaction: ${this.currentCareer.satisfaction}`);
            console.log(`Expected salary: ${this.currentCareer.salary}`);
        } else {
            console.error('No career selected!');
        }
    }
}

// Example usage:
const careerSim = new CareerSimulator();
careerSim.addCareer({name: 'Engineer', satisfaction: 8, salary: 80000});
careerSim.addCareer({name: 'Artist', satisfaction: 7, salary: 40000});

careerSim.selectCareer('Engineer');
careerSim.simulate();