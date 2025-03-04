import Button from "../components/Button";
import PageTitle from "../components/PageTitle";

export default function ContactPage() {
  return (
    <>
      <PageTitle>Contact</PageTitle>
      <section className="side-padding ">
        <div className="mx-auto flex w-full max-w-[400px] flex-col gap-32 pb-[120px] lg:max-w-full lg:flex-row lg:justify-center lg:gap-16 xl:gap-48">
          <form className="w-full space-y-8 text-xl lg:max-w-[450px] xl:max-w-[500px]">
            <h2 className="mb-10 text-base font-light opacity-75 lg:text-lg">
              SEND YOUR MESSAGE
            </h2>
            <div>
              <label htmlFor="fullName" className="mb-1 block text-xl">
                Full Name
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                placeholder="e.g. John Doe"
                className="w-full rounded-lg border-1 border-black/75 bg-beige px-4 py-3 duration-100 ease-in-out hover:scale-[102%] focus:border-black focus:text-black focus:hover:scale-100"
              />
            </div>
            <div>
              <label htmlFor="phoneNumber" className="mb-1 block">
                Phone Number
              </label>
              <input
                id="phoneNumber"
                name="phoneNumber"
                placeholder="e.g. 71 123 123"
                type="text"
                className="w-full rounded-lg border-1 border-black/75 bg-beige px-4 py-3 duration-100 ease-in-out hover:scale-[102%] focus:border-black focus:text-black focus:hover:scale-100"
              />
            </div>
            <div>
              <label htmlFor="message" className="mb-1 block">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows={4}
                placeholder="Say or ask anything..."
                className="w-full rounded-lg border-1 border-black/75 bg-beige px-4 py-3 duration-100 ease-in-out hover:scale-[102%] focus:border-black focus:text-black focus:hover:scale-100"
              ></textarea>
            </div>
            <div>
              <Button size="lg" arrow={true}>
                Send Message
              </Button>
            </div>
          </form>
          <div className="space-y-6">
            <h2 className="mb-10 text-base font-light opacity-75 lg:text-lg">
              OR REACH OUT
            </h2>
            <Button secondary={true} arrow={true} size="lg">
              Whatsapp (71 123 123)
            </Button>
            <Button secondary={true} arrow={true} size="lg">
              Email (hello@arthyl.com)
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
