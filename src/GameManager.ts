import { WebSocket } from "ws";
import { INIT_GAME } from "./Messages";



export class GameManager {
    private games: Game[];
    private pandingUser: WebSocket;
    private user: WebSocket[];

    constructor(){
        this.games = []; 
    }


    addUser(socket: WebSocket){
        this.user.push(socket);
        this.addHandler(socket);
    }

    removeUser(socket: WebSocket){}

    private addHandler(socket: WebSocket) {
        socket.on("message", (data) => {
            const message = JSON.parse(data.toString());

            if (message.type === INIT_GAME) {
                if (this.pandingUser){
                    //start the game
                }else{
                    this.pandingUser = socket
                }
            }
        })
    }
}