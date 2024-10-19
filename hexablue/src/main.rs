use yew::prelude::*;

#[function_component]
fn App() -> Html {
    html!{
        <main>
            <h1>{ "hello" }</h1>
        </main>
    }
}

fn main() {
    yew::Renderer::<App>::new().render();
}