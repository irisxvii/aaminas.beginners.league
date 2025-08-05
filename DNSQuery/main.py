import socket

def resolve(hostname, family):
    try:
        info = socket.getaddrinfo(hostname, None, family, socket.SOCK_STREAM)
        return sorted({res[4][0] for res in info})
    except socket.gaierror:
        return []

def main():
    hostname = "www.kame.net"
    ipv4 = resolve(hostname, socket.AF_INET)
    ipv6 = resolve(hostname, socket.AF_INET6)

    if ipv4:
        print(f"IPv4 addresses for {hostname}:")
        for ip in ipv4:
            print(ip)
    else:
        print(f"No IPv4 address found for {hostname}.")

    if ipv6:
        print(f"\nIPv6 addresses for {hostname}:")
        for ip in ipv6:
            print(ip)
    else:
        print(f"\nNo IPv6 address found for {hostname}.")
    
if __name__ == "__main__":
    main()