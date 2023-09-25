export default function createIteratorObject(report) {
    const departments = Object.values(report.allEmployees);
    const iterator = {
        [Symbol.iterator]() {
            let departmentIndex = 0;
            let employeeIndex = 0;
            return {
                next() {
                    if (departmentIndex < departments.length) {
                        const employees = departments[departmentIndex];
                        if (employeeIndex < employees.length) {
                            return {
                                value: employees[employeeIndex++],
                                done: false,
                            };
                        } else {
                            departmentIndex++;
                            employeeIndex = 0;
                            return next();
                        }
                    } else {
                        return { done: true };
                    }
                },
            };
        },
    };
    return iterator;
}
