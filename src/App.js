import "./App.css";

function Page({ align, index, children }) {
  return (
    <div className={"Page " + align}>
      {children}
      <span className="Page__index">{index}</span>
    </div>
  );
}

function Slide({ children }) {
  return <div className="Slide">{children}</div>;
}

function Box({ children }) {
  return <div className="Box">{children}</div>;
}

function Title() {
  return <h1>Title of the presentation</h1>;
}

function App() {
  return (
    <div className="App">
      <Page index="1" align="center">
        <Slide>
          <Title />
        </Slide>
      </Page>
      <Page index="2" align="top">
        <Slide>
          <h2>First slide</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc sed
            id semper risus in. Ut porttitor leo a diam sollicitudin tempor id
            eu. Sagittis id consectetur purus ut faucibus pulvinar elementum
            integer. Tempor nec feugiat nisl pretium fusce id. Felis imperdiet
            proin fermentum leo vel orci porta. Mattis enim ut tellus elementum.
            Viverra nibh cras pulvinar mattis nunc. Vel fringilla est
            ullamcorper eget nulla facilisi etiam dignissim. Odio ut enim
            blandit volutpat maecenas volutpat blandit aliquam etiam. Elementum
            pulvinar etiam non quam lacus suspendisse faucibus. Quis imperdiet
            massa tincidunt nunc pulvinar sapien. Vel orci porta non pulvinar
            neque laoreet suspendisse interdum. Sed egestas egestas fringilla
            phasellus faucibus scelerisque eleifend. Enim eu turpis egestas
            pretium aenean.
          </p>
        </Slide>
      </Page>
      <Page align="center" index="3">
        <Box>
          <h2>Box</h2>
          <p>
            Maecenas accumsan lacus vel facilisis volutpat. Molestie at
            elementum eu facilisis sed odio morbi. Pretium nibh ipsum consequat
            nisl. Urna porttitor rhoncus dolor purus non enim praesent
            elementum. Eget velit aliquet sagittis id consectetur purus ut.
            Felis bibendum ut tristique et egestas. Id leo in vitae turpis massa
            sed elementum tempus. Nunc pulvinar sapien et ligula ullamcorper
            malesuada proin libero.
          </p>
        </Box>
      </Page>
      <Page index="3" align="bottom">
        <Slide>
          <h2>Second slide</h2>
          <p>
            Maecenas accumsan lacus vel facilisis volutpat. Molestie at
            elementum eu facilisis sed odio morbi. Pretium nibh ipsum consequat
            nisl. Urna porttitor rhoncus dolor purus non enim praesent
            elementum. Eget velit aliquet sagittis id consectetur purus ut.
            Felis bibendum ut tristique et egestas. Id leo in vitae turpis massa
            sed elementum tempus. Nunc pulvinar sapien et ligula ullamcorper
            malesuada proin libero.
          </p>
          <p>
            Suspendisse potenti nullam ac tortor vitae purus faucibus ornare
            suspendisse. Nisi vitae suscipit tellus mauris a. Vestibulum lectus
            mauris ultrices eros in cursus turpis massa tincidunt. Pellentesque
            diam volutpat commodo sed. At augue eget arcu dictum varius duis at
            consectetur lorem. Etiam tempor orci eu lobortis elementum.
          </p>
        </Slide>
      </Page>
    </div>
  );
}

export default App;
