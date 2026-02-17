"use client";
import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  const HandleOpenOneIdRedirect = async () => {
    const width = 800;
    const height = 800;

    const left = window.screenX + (window.outerWidth - width) / 2;
    const top = window.screenY + (window.outerHeight - height) / 2;

    try {
      if (typeof window !== "undefined") {
        const popup = window.open(
          "https://id.egov.uz/oz",
          "popupWindow",
          `width=${width},height=${height},left=${left},top=${top}`,
        );

        if (!popup) {
          alert("Popup bloklangan. Iltimos ruxsat bering.");
          return;
        }

        // Oyna ochilgandan keyin o'lchamini majburan o'zgartirish

        setTimeout(() => {
          try {
            popup.resizeTo(800, 900);
            popup.moveTo(200, 100);
          } catch (e) {
            alert(`Resize ishlamadi: ${JSON.stringify(e)}`);
          }
        }, 1000);

        popup.addEventListener("load", function () {
          popup.resizeTo(800, 600);
          popup.moveTo(100, 100);
        });
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <section id="features" className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="Наши направления деятельности"
            paragraph="Для развития агропромышленного комплекса Узбекистана мы работаем по следующим направлениям:"
            center
          />
          <div className="mb-10 flex justify-center">
            <button
              onClick={HandleOpenOneIdRedirect}
              className="rounded-md bg-blue-500 px-14 py-6 text-xl font-bold text-white"
            >
              Login
            </button>
          </div>

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature, index) => (
              <div key={index} className="w-full">
                <SingleFeature key={feature.id} feature={feature} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
