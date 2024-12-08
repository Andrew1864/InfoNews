

async function FetchWeather() {
    const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/%D0%9B%D0%B8%D0%BF%D0%B5%D1%86%D0%BA?unitGroup=metric&include=current%2Cevents%2Calerts&key=N2D4TUYFK3ZEJG6G6UQMDS9CV&contentType=json`)
    const results = await response.json();
    return results
}

export default async function Wheather() {

    const post = await FetchWeather();

    if (!post.days || post.days.lenght === 0) {
        return <h1 className="text-center mt-6">Нет данных для отоброжения.</h1>
    }

    return (
        <>
            <div className="relative flex flex-col  mx-auto  text-gray-700 bg-white shadow-md rounded-lg bg-clip-border">
                <h1 className="text-center m-2">Погода</h1>
                <table className="w-full text-left table-auto min-w-max">
                    <thead>
                        <tr>
                            <th className="p-4 border-b border-slate-300 bg-slate-50">
                                <p className="block text-sm font-normal leading-none text-slate-500">
                                    Дата и время
                                </p>
                            </th>
                            <th className="p-4 border-b border-slate-300 bg-slate-50">
                                <p className="block text-sm font-normal leading-none text-slate-500">
                                    Влажность
                                </p>
                            </th>
                            <th className="p-4 border-b border-slate-300 bg-slate-50">
                                <p className="block text-sm font-normal leading-none text-slate-500">
                                    Тип осадка
                                </p>
                            </th>
                            <th className="p-4 border-b border-slate-300 bg-slate-50">
                                <p className="block text-sm font-normal leading-none text-slate-500">
                                    Имя
                                </p>
                            </th>
                        </tr>
                    </thead>
                    {post?.days?.map((day, index) => (
                          <tbody>
                          <tr key={index} className="hover:bg-slate-50">
                              <td className="p-4 border-b border-slate-200">
                                  <p className="block text-sm text-slate-800">
                                      {day.datetime}
                                  </p>
                              </td>
                              <td className="p-4 border-b border-slate-200">
                                  <p className="block text-sm text-slate-800">
                                    {day.humidity}
                                  </p>
                              </td>
                              <td className="p-4 border-b border-slate-200">
                                  <p className="block text-sm text-slate-800">
                                    {day.preciptype?.join(", ") || "Нет осадков"}
                                  </p>
                              </td>
                              <td className="p-4 border-b border-slate-200">
                                  <p className="block text-sm text-slate-800">
                                    {day.conditions}
                                  </p>
                              </td>
                          </tr>
                      </tbody>
                    ))}
                  
                </table>
            </div>

        </>
    )

};

// export default Wheather;