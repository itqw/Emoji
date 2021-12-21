import React, {useState} from "react";
import "./App.css"

const App = () => {
    const [string, setString] = useState("");
    const dict = ['😀', '😃', '😄', '😁', '😆', '😂', '😂', '🤣', '😭', '😗', '😙', '😚', '😘', '🥰', '😍', '🤩', '🤗', '🥳', '🙃', '🙂', '☺', '😊', '😏', '😌', '😉', '🤭', '😶', '😐', '😑', '😔', '😋', '😛', '😝', '😜', '🤪', '🤔', '🤨', '🧐', '🙄', '😒', '😤', '😠', '😡', '🤬', '☹', '🙁', '😕', '😦', '🥺', '😳', '😬', '🤐', '🤫', '😰', '😨', '😧', '😦', '😮', '😯', '😲', '😱', '🤯', '😢', '😥', '😓', '😞', '😖', '😣', '😩', '😫', '🤤', '🥱', '😴', '😪', '🌛', '🌜', '🌚', '🌝', '🌞', '🤢', '🤮', '🤧', '🤕', '🤒', '🥴', '😵', '🥵', '🥶', '😷', '😇', '🤠', '🤑', '😎', '🤓', '🤥', '🤡', '👻', '💩', '👽', '🤖', '🎃', '😈', '👿', '👹', '👺', '☠', '🔥', '💫', '⭐', '🌟', '✨', '⚡', '💥', '💯', '💢', '💨', '💦', '💤', '🕳', '🎉', '🎊', '😺', '😸', '😹', '😻', '😼', '😽', '🙀', '😿', '😾', '❤', '🧡', '💛', '💙', '💚', '💜', '🤎', '🖤', '🤍', '♥', '💘', '💝', '💖', '💗', '💓', '💞', '💕', '💌', '💟', '❣', '💔', '💋', '👥', '👤', '🗣', '🧠', '🩸', '🦠', '🦷', '🦴', '💀', '👀', '👁', '👄', '👅', '👃', '👂', '🦻', '🦶', '🦵', '🦿', '🦾', '💪', '👍', '👎', '👏', '🙌', '👐', '🤲', '🤝', '🤜', '🤛', '✊', '👊', '🖐', '✋', '🤚', '👋', '🤏', '👌', '✌', '🤘', '🤟', '🤙', '🤞', '🖕', '🖖', '☝', '👆', '👇', '👉', '👈', '✍', '🤳', '🙏', '💅'];

    const doHype = () => {
        let d = string.replace(",", "").split(" ");
        let str = "";
        for(let x in d) {
            str += d[x];
            str += " "
            str += dict[Math.floor(Math.random() * dict.length)]
            str += " "
        }
        document.getElementById("generated").value = str;
    };

    return(
        <div className={"wrapper"}>
            <div className={"center"}>
                <div className={"box"}>
                    <textarea onChange={(e) => {setString(e.target.value)}} className={"textarea user-text"} placeholder={"Исходный текст"}/>
                    <button onClick={doHype} className={"button"}>Сгенерировать</button>
                    <textarea id={"generated"} className={"textarea app-text"} placeholder={"Здесь появится новый текст"}/>
                </div>
            </div>
        </div>
    )
}

export default App;