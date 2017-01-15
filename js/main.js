(function() {
    class LocalDB {
        constructor(dataBase) {
          this.dataBase = dataBase;
        }

        get(name) {
          let data = JSON.parse(window.localStorage.getItem(`${this.dataBase}.${name}`));
          console.log(data);
        }

        save(name, data) {
          window.localStorage.setItem(`${this.dataBase}.${name}`, JSON.stringify(data));
        }
    }
    if ("localStorage" in window) {
        var DB1 = new LocalDB("DB1");

        var janek = {
            firstName: "Janek",
            lastName: "Kowalski",
            age: 21
        };

        DB1.save("Krystian", janek);
        DB1.get("Krystian");
    } else {
        console.log("Przeglądarka nie wspiera localStorage");
    }
})();