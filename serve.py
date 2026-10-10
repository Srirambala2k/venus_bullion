"""Local preview server that never caches, so edits show up on a normal refresh.
Usage:  python serve.py [port] [folder]      (defaults: 8080, the project folder)"""
import functools, http.server, os, sys

class NoCache(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Cache-Control', 'no-store, must-revalidate')
        super().end_headers()

port = int(sys.argv[1]) if len(sys.argv) > 1 else 8080
folder = os.path.abspath(sys.argv[2]) if len(sys.argv) > 2 else os.path.dirname(os.path.abspath(__file__))
handler = functools.partial(NoCache, directory=folder)
with http.server.ThreadingHTTPServer(('127.0.0.1', port), handler) as srv:
    print('Serving %s at http://localhost:%d  (Ctrl+C to stop)' % (folder, port))
    srv.serve_forever()
