import { Card, Center, Text } from '@mantine/core'

const FormPage = ({ active }: { active: boolean }) => {
    const width = Math.min(window.innerWidth - 50, 640)
    return (
        <>
            <Card >
                <Text size="lg" ta="start">
                    Jedyne żródło piosenek o którym aktualnie wiem to <a href='https://ultrastar-es.org/'>https://ultrastar-es.org/</a>.
                    Jeżeli brakuje jakiś piosenek na liście, a są na tej stronce, to moge je łatwo dodać.
                    Możecie składać zamówienia przez ten formularz:
                </Text>
            </Card>
            <Center style={{ position: "relative" }}>
                {active && <iframe
                    style={{ backgroundColor: "#FFFFFF" }}
                    src="https://docs.google.com/forms/d/e/1FAIpQLSfGcpcv2osGhE88FPwjcciMwlzNLq7CSHIZT2gKkomqNYWx0Q/viewform?embedded=true"
                    width={width}
                    height="700"
                    frameBorder="0">Ładuję…</iframe>}
            </Center>
        </>
    )
}

export default FormPage