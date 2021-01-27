// Build Order
export default function createBuildOrder(allProjects, dependencies) {
    const projects = new Map(),
        buildQueue = [];

    // Create the projects
    for (let projectId of allProjects) {
        let project = new Project(projectId);
        projects.set(projectId, project);
        buildQueue.push(project);
    }

    // Add dependencies
    for (let dependency of dependencies) {
        let dependsOn = projects.get(dependency[0]),
            dependent = projects.get(dependency[1]);

        dependsOn.addNext(dependent);
        dependent.addDependency(dependsOn);

        // Remove the dependent from the starting projects
        let startIndex = buildQueue.indexOf(dependent);
        if (startIndex >= 0) {
            buildQueue.splice(startIndex, 1);
        }
    }

    const buildOrder = [],
        completedProjects = new Map();

    // Traverse the projects
    while (buildQueue.length) {
        let project = buildQueue.shift();

        // Add the project to the build order and completed projects hash table
        buildOrder.push(project.id);
        completedProjects.set(project, true);

        // Add projects that dependend on this project to the queue
        for (let next of project.next) {
            if (next.ready(completedProjects)) {
                buildQueue.push(next);
            }
        }
    }

    // See if all the projects were built
    if (buildOrder.length == allProjects.length) {
        return buildOrder;
    } else {
        return false;
    }
}

class Project {
    constructor(id) {
        this.id = id;
        this.next = [];
        this.dependencies = [];
    }

    addNext(project) {
        this.next.push(project);
    }

    addDependency(project) {
        this.dependencies.push(project);
    }

    // Function that checks if all dependencies are done
    ready(completedProjects) {
        for (let dependency of this.dependencies) {
            if (!completedProjects.has(dependency)) {
                return false;
            }
        }

        return true;
    }
}
