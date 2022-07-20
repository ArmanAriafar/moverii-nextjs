//? Comps
import PaperPlan from "../ui/PaperPlan";
import PaperPlanTwo from "../ui/PaperPlanTwo";

//? Comp
export default function MissionSection() {
    return (
        <section className="w-full">
            <div className="mx-auto grid w-full max-w-7xl grid-cols-[1fr_2.7fr_1fr] items-start justify-items-center py-[4rem]">
                <PaperPlanTwo />
                <div className="text-center text-black-800">
                    <h1 className="text-3xl font-bold">Our Mission</h1>
                    <p className="text-base font-normal mt-6">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua Egestas purus viverra accumsan in nisl nisi Arcu cursus vitae
                        congue mauris rhoncus aenean vel elit scelerisque In egestas erat imperdiet sed euismod nisi
                        porta lorem mollis Morbi tristique senectus et netus Mattis pellentesque id nibh tortor id
                        aliquet lectus proin Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Lorem ipsum
                        dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua Egestas purus viverra accumsan in <br /> <br /> egestas erat imperdiet sed
                        euismod nisi porta lorem mollis Morbi tristique senectus et netus Mattis pellentesque id nibh
                        tortor id aliquet lectus proin Sapien faucibus et molestie ac feugiat sed lectus vestibulum.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua Egestas purus viverra accumsan in nisl nisi Arcu cursus vitae
                        congue mauris rhoncus aenean vel elit scelerisque In egestas erat imperdiet sed euismod nisi
                        porta lorem mollis Morbi tristique senectus et netus Mattis pellentesque id nibh tortor id
                        aliquet lectus proin Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Lorem ipsum
                        dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua Egestas.
                    </p>
                </div>
                <PaperPlan />
            </div>
        </section>
    );
}
