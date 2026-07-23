/*

Intro:

We're also tracking whether someone is a full-time employee
or a contractor. On top of that we now know the base pay for
each department, so full-timers' pay should be looked up from
there instead of being stored on the person directly.

Exercise:

Fix type errors in describeWorker function.

describeWorker function should accept both FullTimeEmployee
and Contractor and should output relevant information
according to the input: base department pay (looked up in
departmentPayRates) for FullTimeEmployee, and hourly rate for
Contractor.

*/

interface FullTimeEmployee {
  name: string;
  age: number;
  department: string;
}

interface Contractor {
  name: string;
  age: number;
  hourlyRate: number;
}

export type Worker = FullTimeEmployee | Contractor;
//convert department name to enum to avoid typos and make it easier to manage

export const departmentPayRates: Record<string, number> = {
  Engineering: 95000,
  Sales: 72000,
  Support: 58000,
  Marketing: 68000,
};

export const workers: Worker[] = [
  { name: "Alice Novak", age: 29, department: "Engineering" },
  { name: "Ben Carter", age: 41, hourlyRate: 85 },
  { name: "Priya Shah", age: 34, department: "Sales" },
  { name: "Tomasz Lewandowski", age: 52, hourlyRate: 120 },
  { name: "Grace Okafor", age: 27, department: "Marketing" },
];

export function describeWorker(worker: Worker) {
  let additionalInformation: string;

  if (worker.hourlyRate) {
    additionalInformation = `contractor at $${worker.hourlyRate}/hr`;
  } else {
    const basePay = departmentPayRates[worker.department];
    additionalInformation = `${worker.department} dept, base pay $${basePay}`;
  }

  console.log(` - ${worker.name}, ${worker.age}, ${additionalInformation}`);
}

workers.forEach(describeWorker);

// In case you are stuck:
// https://www.typescriptlang.org/docs/handbook/2/narrowing.html#the-in-operator-narrowing
