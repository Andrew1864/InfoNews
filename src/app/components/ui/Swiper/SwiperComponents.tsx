"use client";
import { Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const SwiperComponents = () => {
  return (
    <div className="mx-auto w-full max-w-7xl px-4">
      <Swiper
        modules={[Navigation, Pagination]} // Подключаем только необходимые модули
        spaceBetween={50} // Расстояние между слайдами
        slidesPerView={1} // Один слайд за раз
        loop={false} // Отключаем бесконечную прокрутку
        navigation={{
          nextEl: ".swiper-button-next", // Кнопка для переключения вперед
          prevEl: ".swiper-button-prev", // Кнопка для переключения назад
        }}
        pagination={{ clickable: true }} // Делаем пагинацию кликабельной
        autoplay={false} // Отключаем автопрокрутку
        className="container"
      >
        <SwiperSlide>
          <div className=" relative isolate overflow-hidden  px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
            <div className="absolute inset-0 -z-10 overflow-hidden"></div>
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
              <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                <div className="lg:pr-4">
                  <div className="lg:max-w-lg">
                    <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                      INFO NEWS
                    </h1>
                    <p className="mt-6 text-xl/8 text-gray-700">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Obcaecati illo, possimus est eligendi dolorum sint neque,
                      repellat sunt aliquid totam perferendis minima asperiores
                      quod?
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Переехали изображение вниз */}
            <div className="relative p-12 lg:col-start-1 lg:col-span-2 lg:row-start-2 lg:overflow-hidden">
              <img
                alt=""
                src="https://www.shutterstock.com/image-photo/pretty-little-blonde-girl-straw-600nw-538413133.jpg"
                className="w-full max-w-full h-auto rounded-xl bg-gray-900 ring-1 shadow-xl ring-gray-400/10 sm:w-[57rem]"
              />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className=" py-24 sm:py-32">
            <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
              <p className="mx-auto mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight text-balance text-gray-950 sm:text-5xl">
                Все что использую на сайте.
              </p>
              <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
                <div className="relative lg:row-span-2">
                  <div className="absolute inset-px rounded-lg bg-white lg:rounded-l-[2rem]"></div>
                  <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
                    <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                      <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                        Все о погоде.
                      </p>
                    </div>
                    <div className="@container relative min-h-[30rem] w-full grow rounded-xl max-lg:mx-auto max-lg:max-w-sm">
                      <div className="absolute inset-x-10 top-10 bottom-0 overflow-hidden  border-gray-700 bg-gray-900 shadow-2xl">
                        <img
                          className="w-full h-full object-cover object-center"
                          src="https://www.oka.fm/news2023/pshlgovripa680.jpg"
                          alt="Weather"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 lg:rounded-l-[2rem]"></div>
                </div>
                <div className="relative max-lg:row-start-1">
                  <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem]"></div>
                  <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
                    <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                      <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                        Новости
                      </p>
                      <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit
                        maiores impedit.
                      </p>
                    </div>
                    <div className="flex flex-1 items-center justify-center px-8 max-lg:pt-10 max-lg:pb-12 sm:px-10 lg:pb-2">
                      <img
                        className="w-full max-lg:max-w-xs object-cover"
                        src="https://tailwindui.com/plus-assets/img/component-images/bento-03-performance.png"
                        alt="News"
                      />
                    </div>
                  </div>
                  <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 max-lg:rounded-t-[2rem]"></div>
                </div>
                <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
                  <div className="absolute inset-px rounded-lg bg-white"></div>
                  <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
                    <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                      <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                        Разные карточки{" "}
                      </p>
                    </div>
                    <div className="@container flex flex-1 items-center max-lg:py-6 lg:pb-2">
                      <img
                        className="h-[min(152px,40cqw)] object-cover"
                        src="https://tailwindui.com/plus-assets/img/component-images/bento-03-security.png"
                        alt="Security"
                      />
                    </div>
                  </div>
                  <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5"></div>
                </div>
                <div className="relative lg:row-span-2">
                  <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
                  <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
                    <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                      <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                        Powerful APIs
                      </p>
                      <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                        Примеры использования API
                      </p>
                    </div>
                    <div className="relative min-h-[30rem] w-full grow">
                      <div className="absolute top-10 right-0 bottom-0 left-10 overflow-hidden rounded-tl-xl bg-gray-900 shadow-2xl">
                        <div className="flex bg-gray-800/40 ring-1 ring-white/5">
                          <div className="-mb-px flex text-sm/6 font-medium text-gray-400">
                            <div className="border-r border-b border-r-white/10 border-b-white/20 bg-white/5 px-4 py-2 text-white">
                              NotificationSetting.jsx
                            </div>
                            <div className="border-r border-gray-600/10 px-4 py-2">
                              App.jsx
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperComponents;
