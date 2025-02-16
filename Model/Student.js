class Student {
    constructor(nim, name, year) {
      this._nim = nim;
      this._name = name;
      this._year = year;
    }
  
    getNim() {
      return this._nim;
    }
  
    setNim(nim) {
      this._nim = nim;
    }
  
    getName() {
      return this._name;
    }
  
    setName(name) {
      this._name = name;
    }
  
    getYear() {
      return this._year;
    }
  
    setYear(year) {
      this._year = year;
    }
  }
  
  export default Student;
  