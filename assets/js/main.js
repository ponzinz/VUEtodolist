// Rifare l'esercizio della to do list.
// Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
// - text, una stringa che indica il testo del todo
// - done, un booleano (true/false) che indica se il todo è stato fatto oppure no
//* MILESTONE 1 [✔]
// Stampare all'interno di una lista HTML un item per ogni todo.
// Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
//* MILESTONE 2 [✔]
// Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.
//* MILESTONE 3 [✔]
// Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.
// Bonus:
//* 1- [✔] oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista
//* 2- [✔] cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa)


const { createApp } = Vue;

createApp({
    data() {
        return {
            taskList: [
                {
                    text: "Help Iron Man defeat the Mandarin and protect the world",
                    done: false
                },
                {
                    text: "Join forces with the Guardians of the Galaxy to stop Ronan the Accuser",
                    done: false
                },
                {
                    text: "Find and secure all the Infinity Stones before they fall into the wrong hands",
                    done: false
                },
                {
                    text: "Assist Peter Quill in saving Xandar from destruction",
                    done: false
                },
                {
                    text: "Aid Tony Stark in developing technology to defend against alien threats",
                    done: false
                },
                {
                    text: "Protect Earth from the invasion of the Chitauri alongside the Avengers",
                    done: false
                },
                {
                    text: "Discover the truth behind the mysterious entity known as the Ego",
                    done: false
                },
                {
                    text: "Work with Doctor Strange to defend the universe from dimensional threats",
                    done: false
                },
                {
                    text: "Assist Star-Lord and his team in retrieving the Orb and preventing its misuse",
                    done: false
                },
                {
                    text: "Find a way to reverse the Snap and bring back those who were dusted by Thanos",
                    done: false
                }
            ],
            userTask: '',
            invalidValue: false,
        }
    },
    methods: {
        deleteTask(deleteIndex) {
            this.taskList.splice(deleteIndex, 1);
        },
        addTask() {
            // push input only if the imput length is > 3
            if (this.userTask.length >= 3) {
                this.taskList.push({ text: this.userTask, done: false });
                // delete input value to show placeholder
                this.userTask = '';
                this.invalidValue = false;

            } else {
                this.invalidValue = true;
            }
        },
    },
    mounted() {

    },
}).mount('#app');