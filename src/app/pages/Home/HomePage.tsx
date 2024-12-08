

const HomePage = () => {

    return (
        <div className="relative  isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
        <div className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl" aria-hidden="true">
          <div className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"></div>
        </div>
        <div className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu" aria-hidden="true">
          <div className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20" ></div>
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl">Info News</h2>
            <p className="mt-8 text-pretty text-lg font-medium text-gray-300 sm:text-xl/8">Информационный сайт расскажет многому. Здесь вы найдете биржа, новости, игро-новости и так же погоду.</p>
          </div>
          <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
            <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col-reverse gap-1">
                <dt className="text-base/7 text-gray-300">Биржа</dt>
                <dd className="text-4xl font-semibold tracking-tight text-white">First</dd>
              </div>
              <div className="flex flex-col-reverse gap-1">
                <dt className="text-base/7 text-gray-300">Новости</dt>
                <dd className="text-4xl font-semibold tracking-tight text-white">Second</dd>
              </div>
              <div className="flex flex-col-reverse gap-1">
                <dt className="text-base/7 text-gray-300">Игро-Новости</dt>
                <dd className="text-4xl font-semibold tracking-tight text-white">Third</dd>
              </div>
              <div className="flex flex-col-reverse gap-1">
                <dt className="text-base/7 text-gray-300">Погода</dt>
                <dd className="text-4xl font-semibold tracking-tight text-white">Fourth</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    )
};

export default HomePage;