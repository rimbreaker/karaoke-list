import { Card, Center, Skeleton, Text } from '@mantine/core'
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
                    src="https://docs.google.com/forms/d/e/1FAIpQLSfGcpcv2osGhE88FPwjcciMwlzNLq7CSHIZT2gKkomqNYWx0Q/viewform?embedded=true"
                    width={width}
                    height="700"
                    frameBorder="0">Ładuję…</iframe>}
                <Skeleton style={{ zIndex: -1, position: "absolute" }} height={700} width={width} radius="lg" />
            </Center>
        </>
    )
}

export default FormPage