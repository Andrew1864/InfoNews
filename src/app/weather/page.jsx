import Table from "@/components/table/Table"

async function FetchWeather() {
    const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/%D0%9B%D0%B8%D0%BF%D0%B5%D1%86%D0%BA?unitGroup=metric&include=current%2Cevents%2Calerts&key=N2D4TUYFK3ZEJG6G6UQMDS9CV&contentType=json`)
    const results = await response.json();
    return results
}

export default async function Wheather() {

    const post = await FetchWeather();

    console.log("Имя", post?.address)

    if (!post.days || post.days.lenght === 0) {
        return <h1 className="text-center mt-6">Нет данных для отоброжения.</h1>
    };

    const tableData = post?.days?.map((day) => ({
        date: day?.datetime,
        humidity: `${day.humidity}%`,
        preciptype: day.preciptype?.join(", ") || "Нет осадков",
        post: post.resolvedAddress,
    }));

    console.log("Файлы Api", tableData)

    return (
        <>
            <Table
                headers={[
                    { key: "date", title: "Дата и время" },
                    { key: "humidity", title: "Влажность" },
                    { key: "preciptype", title: "Тип осадки" },
                    { key: "post", title: "Город" },
                ]}
                data={tableData}
            />

        </>
    );
};

