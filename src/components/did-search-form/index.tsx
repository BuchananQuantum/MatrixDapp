import {  Spinner, Input } from "@nextui-org/react";
import { useRouter } from "next/router";
import { FormEvent, useState } from "react";
import { Search, Send } from "@components";
import { Box } from '@primitives'



export default function DidSearchForm() {
    const router = useRouter()
    const [loading, setLoading] = useState<boolean>(false)
    const [focus, setFocus] = useState<boolean>(false)
    const [value, setValue] = useState<string>('')

    function onSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setLoading(true)
        void router.push(`/${value}`)
    }

    const inputIcon = loading ? (
        <Spinner />
    ) : (
        <Box css={{ marginLeft: '$sm' }}>
            <Search width={24} height={24} />
        </Box>
    )
    
    return (
        <form
                onSubmit={onSubmit}
                style={{
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                }}>
                <Box>
                  <Input
                    clearable
                    disabled={loading}
                    id="did"
                    labelLeft="Matrix.DID"
                    onChange={(event) => setValue(event.target.value)}
                    onBlur={() => setFocus(false)}
                    onFocus={() => setFocus(true)}
                    initialValue="Search by DID or blockchain address"
                    contentRight={
                         <Send />
                      }
                    value={value}
                  />
                </Box>
              </form>
    )
}