import { useEffect, useState } from "react";
import { Flex, Typography } from "antd";
import { useNavigate } from "react-router";
import { Ingredient } from "../../components/Ingredient/Ingredient";
const { Title } = Typography;

const Dashboard = () => {
    const [ingredients, setIngredients] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        if (!localStorage.getItem("accessToken")) {
            navigate("/login");
            return;
        }

        const accessToken = localStorage.getItem("accessToken");
        fetch("http://localhost:8080/ingredients", {
            method: "GET",
            headers: {
                "Content-type": "application/json",
                Authorization: accessToken,
            },
        })
            .then(async (res) => {
                if (!res.ok) {
                    const text = await res.text();
                    throw new Error(text);
                }
                return res.json();
            })
            .then((data) => {
                setIngredients(data);
            })
            .catch((error) => {
                // Optionally handle error, e.g., redirect or show message
                console.error("Fetch error:", error.message);
            });
    }, [navigate]);

    return (
        <Flex vertical gap={"5px"}>
            <Title>Dashboard</Title>
            {ingredients.map((ingredient, index) => {
                return <Ingredient name={ingredient.name} key={index} />;
            })}
        </Flex>
    );
};

export { Dashboard };
