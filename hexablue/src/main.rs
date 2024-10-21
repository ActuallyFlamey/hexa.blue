use yew::prelude::*;

#[function_component]
fn App() -> Html {
    html!{
        <main>
            <div class="bg-darkrainbow">
                <div id="nav" class="flex p-[0.5%] items-center gap-[0.75%]">
                    <svg width="3%" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M45.8611 4.39201C46.5621 4.25574 47.2826 4.50383 47.7512 5.04282L68.3391 28.7265C68.8076 29.2655 68.953 30.0135 68.7205 30.6888L58.5038 60.3603C58.2713 61.0356 57.6962 61.5355 56.9951 61.6718L26.1905 67.6596C25.4894 67.7958 24.7689 67.5478 24.3004 67.0088L3.71248 43.3251C3.24394 42.7861 3.09854 42.0381 3.33105 41.3628L13.5478 11.6913C13.7803 11.016 14.3554 10.5161 15.0564 10.3798L45.8611 4.39201Z" stroke="url(#paint0_linear_558_12)" stroke-width="4.002"/>
                        <defs>
                          <@{"linearGradient"} id="paint0_linear_558_12" x1="16.3829" y1="11.2773" x2="61.6203" y2="56.7659" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#FF5D5B"/>
                            <stop offset="0.239583" stop-color="#F79455"/>
                            <stop offset="0.46875" stop-color="#FFD95A"/>
                            <stop offset="0.651042" stop-color="#5BFE9E"/>
                            <stop offset="0.838542" stop-color="#4E6AFF"/>
                            <stop offset="1" stop-color="#B061FC"/>
                          </@>
                        </defs>
                    </svg>
                    <h1 class="bg-clip-text text-transparent bg-textrainbow font-inter font-black text-[175%] ml-[-0.5%]">
                        { "HexaBlue" }
                    </h1>
                    <p class="font-inter font-semibold text-white">{ "About" }</p>
                    <p class="font-inter font-semibold text-white">{ "Projects" }</p>
                    <p class="font-inter font-semibold text-white">{ "Contact" }</p>
                </div>
            </div>
        </main>
    }
}

fn main() {
    yew::Renderer::<App>::new().render();
}