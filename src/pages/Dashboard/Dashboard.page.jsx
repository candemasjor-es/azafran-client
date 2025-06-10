import { useEffect, useState } from "react";

const Dashboard = () => {
    // mostrarle al usuario los ingredientes que el
    // mismo ha puesto en su db
    const [ingredients, setIngredients] = useState([]);

    useEffect(() => {
        const accessToken = localStorage.getItem("accessToken");
        fetch("http://localhost:8080/ingredients", {
            method: "GET",
            headers: {
                "Content-type": "application/json",
                Authorization: accessToken,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
            });
    }, []);

    return <div>Dashboard</div>;
};

export { Dashboard };
