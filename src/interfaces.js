var Doctor = /** @class */ (function () {
    function Doctor(name, email, username, password, specialization) {
        this.name = name;
        this.email = email;
        this.username = username;
        this.password = password;
        this.specialization = specialization;
    }
    return Doctor;
}());
var doc = new Doctor("Arsalan", "arsalan@appointment.io", "drarsalan", "abc", "dentist");
console.log(doc.name);
var Patient = /** @class */ (function () {
    function Patient(id, name, email, username, password, medicalHistory) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.username = username;
        this.password = password;
        this.medicalHistory = medicalHistory;
    }
    return Patient;
}());
var babu = new Patient(2, "babu", "babu@aapointment.net", "babupat", "passabc", "n/a");
console.log(babu.medicalHistory);
