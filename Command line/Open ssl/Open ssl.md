```
#!/bin/sh

echo "Creating message file"
echo "---------------------"

echo "My secret message" > message.txt
echo "done\n"

echo "Creating asymmetric key pair"
echo "----------------------------"

openssl genpkey -algorithm RSA -out private.pem -pkeyopt rsa_keygen_bits:2048
openssl rsa -in private.pem -out public.pem -pubout
echo "done\n"

echo "Public key encrypts and private key decrypts"
echo "--------------------------------------------"

openssl rsautl -encrypt -inkey public.pem -pubin -in message.txt         -out message_enc_pub.ssl
openssl rsautl -decrypt -inkey private.pem       -in message_enc_pub.ssl -out message_pub.txt
xxd message_enc_pub.ssl # Print the binary contents of the encrypted message
cat message_pub.txt # Print the decrypted message
echo "done\n"

echo "Private key encrypts and public key decrypts"
echo "--------------------------------------------"

openssl rsautl -sign    -inkey private.pem -in message.txt          -out message_enc_priv.ssl
openssl rsautl -inkey public.pem -pubin    -in message_enc_priv.ssl -out message_priv.txt
xxd message_enc_priv.ssl
cat message_priv.txt
echo "done\n"
```
