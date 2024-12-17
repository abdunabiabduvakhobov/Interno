import { ContainerWrapper } from "../container-wrapper"

export const Footer = () => {
  return (
    <section>
        <hr />
      <ContainerWrapper>
        <div>
            <nav>
                <ul className="flex justify-center xl:flex-row flex-col text-center ">
                    <ol >Copyright © Interno |</ol>
                    <ol className="mt-[20px] xl:mt-0">Designed by Victorflow Templates</ol>
                    <ol className="mt-[20px] xl:mt-0">Templates - Powered by Webflow</ol>
                </ul>
            </nav>
        </div>
      </ContainerWrapper>
    </section>
  )
}

 