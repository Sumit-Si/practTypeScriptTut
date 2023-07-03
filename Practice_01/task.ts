// Interface

interface School {
    name: string;
    city: string;
    country: string;
    state: string;
    address: string;
    totalStaff: number;
    totalClass: number;
    IsCBSEBoard: boolean;
}

const aps: School = {
    name: "Army Public School",
    city: "Patiala",
    country: "India",
    state: "Punjab",
    address: "nbco enclave near metro station, patiala",
    totalStaff: 105,
    totalClass: 20,
    IsCBSEBoard: true
}

function getSchool(data: School): string {
    return `School data is fetched, its details is ${data}`;
}

getSchool(aps);