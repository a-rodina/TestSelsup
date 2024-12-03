import React, { useState } from "react";

interface Param {
    id: number;
    name: string;
    type: string;
}

interface Color {
    id: number;
    name: string;
}

interface ParamValue {
    paramId: number;
    value: string | undefined;
}

interface Model {
    paramValues: ParamValue[];
    colors: Color[];
}

interface Props {
    params: Param[];
    model: Model;
}

function ParamEditor({ params, model }: Props) {
    const [item, setItem] = useState(model);
    const getModel = () => {
        for (let i = 0; i < item.paramValues.length; i++) {
            console.log(item.paramValues[i].value);
        }
    };
    
    const changeParam = (value: string, id: number) => {
        const paramValues = item.paramValues
        paramValues[id] = { paramId: item.paramValues.length, value: value }
        setItem(state =>
            ({ ...state, paramValues: paramValues }))
        }

    return ( <>
        <div>
            {params.map((item, index) => (
                <div key={index}
                    style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "10px",
                    }}
                >
                    <label style={{ fontWeight: "bold", width: "100px" }}>{item.name}:{" "}</label>
                    <input
                        type="text"
                        value={model.paramValues[index].value}
                        onChange={(e) => changeParam(e.target.value, index)}
                    />
                </div>
            ))}
            <button
                style={{
                backgroundColor: "grey",
                color: "white",
                padding: "10px",
                marginTop: "10px",
                cursor: "pointer",
                borderRadius: "5px",
                border: "none"
                }}
            onClick={() => (getModel())}
            >
            Получить модель
            </button>
        </div>
    </> );
}

export default ParamEditor;
