


export default function HomeLayout({
    children,
    HeaderComp:HeaderComp
  }) {
    return (
      <section>
        {HeaderComp && <HeaderComp />}
        {children}
      </section>
    )
  }